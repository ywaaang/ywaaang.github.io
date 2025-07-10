import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, CheckCircle, AlertCircle, Expand, Minimize2, Loader2 } from "lucide-react";
import JsonViewer from "@/components/JsonViewer";

// 递归解析JSON中的字符串属性
const recursiveJsonParse = (obj) => {
  if (typeof obj === 'string') {
    try {
      // 尝试解析字符串为JSON
      const parsed = JSON.parse(obj);
      // 如果解析成功，递归处理解析后的对象
      return recursiveJsonParse(parsed);
    } catch (e) {
      // 如果解析失败，返回原字符串
      return obj;
    }
  } else if (Array.isArray(obj)) {
    // 如果是数组，递归处理每个元素
    return obj.map(item => recursiveJsonParse(item));
  } else if (obj && typeof obj === 'object') {
    // 如果是对象，递归处理每个属性
    const result = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = recursiveJsonParse(obj[key]);
      }
    }
    return result;
  }
  // 其他类型直接返回
  return obj;
};

const JsonFormatter = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [parsedData, setParsedData] = useState(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState("tree"); // "tree" or "text"
  const [isFormatting, setIsFormatting] = useState(false);

  const formatJson = useCallback((inputText) => {
    const textToProcess = inputText !== undefined ? inputText : input;
    
    if (!textToProcess.trim()) {
      setOutput("");
      setParsedData(null);
      setError("");
      setIsFormatting(false);
      return;
    }

    try {
      const parsed = JSON.parse(textToProcess);
      // 递归解析所有可能的JSON字符串
      const recursivelyParsed = recursiveJsonParse(parsed);
      const formatted = JSON.stringify(recursivelyParsed, null, 2);
      setOutput(formatted);
      setParsedData(recursivelyParsed);
      setViewMode("tree"); // 自动切换到树形视图
      setError("");
    } catch (err) {
      setError("无效的JSON格式");
      setOutput("");
      setParsedData(null);
    }
    setIsFormatting(false);
  }, [input]);

  // 自动格式化 - 输入变化1秒后自动触发
  useEffect(() => {
    if (!input.trim()) {
      setOutput("");
      setParsedData(null);
      setError("");
      return;
    }

    setIsFormatting(true);
    const timeoutId = setTimeout(() => {
      formatJson(input);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [input, formatJson]);

  const minifyJson = () => {
    if (!input.trim()) {
      setError("请输入JSON数据");
      return;
    }

    try {
      const parsed = JSON.parse(input);
      // 递归解析所有可能的JSON字符串
      const recursivelyParsed = recursiveJsonParse(parsed);
      const minified = JSON.stringify(recursivelyParsed);
      setOutput(minified);
      setParsedData(recursivelyParsed);
      setViewMode("text"); // 压缩后显示文本视图
      setError("");
    } catch (err) {
      setError("无效的JSON格式");
      setOutput("");
      setParsedData(null);
    }
  };

  const clearAll = () => {
    setInput("");
    setOutput("");
    setParsedData(null);
    setError("");
    setCopied(false);
    setIsFormatting(false);
  };

  const copyToClipboard = async () => {
    try {
      const textToCopy = output || (parsedData ? JSON.stringify(parsedData, null, 2) : "");
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("复制失败:", err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold">JSON格式化工具</h1>
          {isFormatting && (
            <div className="flex items-center gap-2 text-blue-600">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm">正在格式化...</span>
            </div>
          )}
        </div>
        <div className="flex gap-2">
          <Button 
            onClick={() => formatJson()} 
            className="bg-blue-600 hover:bg-blue-700"
            disabled={isFormatting}
          >
            手动格式化
          </Button>
          <Button 
            onClick={minifyJson} 
            variant="outline"
            disabled={isFormatting}
          >
            压缩
          </Button>
          <Button onClick={clearAll} variant="outline">
            清空
          </Button>
          {parsedData && (
            <div className="flex gap-1 ml-2">
              <Button
                onClick={() => setViewMode("tree")}
                variant={viewMode === "tree" ? "default" : "outline"}
                size="sm"
              >
                <Expand className="h-4 w-4 mr-1" />
                树形
              </Button>
              <Button
                onClick={() => setViewMode("text")}
                variant={viewMode === "text" ? "default" : "outline"}
                size="sm"
              >
                <Minimize2 className="h-4 w-4 mr-1" />
                文本
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              输入JSON
              <span className="text-sm text-gray-500 font-normal">
                (自动格式化)
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="在这里粘贴或输入JSON数据... (输入后1秒自动格式化)"
              className="min-h-[400px] font-mono text-sm"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center justify-between">
              输出结果
              {(output || parsedData) && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={copyToClipboard}
                  className="ml-2"
                >
                  {copied ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {error ? (
              <div className="flex items-center gap-2 text-red-600 p-4 bg-red-50 rounded-md">
                <AlertCircle className="h-5 w-5" />
                <span>{error}</span>
              </div>
            ) : parsedData && viewMode === "tree" ? (
              <div className="min-h-[400px]">
                <JsonViewer data={parsedData} />
              </div>
            ) : (
              <Textarea
                value={output}
                readOnly
                className="min-h-[400px] font-mono text-sm bg-gray-50"
                placeholder="格式化后的JSON将在这里显示..."
              />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JsonFormatter; 