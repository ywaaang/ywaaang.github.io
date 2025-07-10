import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, CheckCircle, ArrowUpDown } from "lucide-react";

const Base64Tool = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("encode"); // 'encode' or 'decode'
  const [copied, setCopied] = useState(false);

  const encode = () => {
    try {
      const encoded = btoa(unescape(encodeURIComponent(input)));
      setOutput(encoded);
    } catch (err) {
      setOutput("编码失败：输入包含无效字符");
    }
  };

  const decode = () => {
    try {
      const decoded = decodeURIComponent(escape(atob(input)));
      setOutput(decoded);
    } catch (err) {
      setOutput("解码失败：输入不是有效的Base64字符串");
    }
  };

  const process = () => {
    if (mode === "encode") {
      encode();
    } else {
      decode();
    }
  };

  const swap = () => {
    setInput(output);
    setOutput("");
    setMode(mode === "encode" ? "decode" : "encode");
  };

  const clear = () => {
    setInput("");
    setOutput("");
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("复制失败:", err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Base64编码解码工具</h1>
        <div className="flex gap-2">
          <Button
            onClick={() => setMode("encode")}
            variant={mode === "encode" ? "default" : "outline"}
          >
            编码
          </Button>
          <Button
            onClick={() => setMode("decode")}
            variant={mode === "decode" ? "default" : "outline"}
          >
            解码
          </Button>
          <Button onClick={process} className="bg-blue-600 hover:bg-blue-700">
            {mode === "encode" ? "编码" : "解码"}
          </Button>
          <Button onClick={swap} variant="outline">
            <ArrowUpDown className="h-4 w-4" />
          </Button>
          <Button onClick={clear} variant="outline">
            清空
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              {mode === "encode" ? "原始文本" : "Base64编码"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                mode === "encode"
                  ? "在这里输入要编码的文本..."
                  : "在这里输入要解码的Base64字符串..."
              }
              className="min-h-[400px] font-mono text-sm"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center justify-between">
              {mode === "encode" ? "Base64编码" : "解码结果"}
              {output && (
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
            <Textarea
              value={output}
              readOnly
              className="min-h-[400px] font-mono text-sm bg-gray-50"
              placeholder={
                mode === "encode"
                  ? "编码后的Base64字符串将在这里显示..."
                  : "解码后的文本将在这里显示..."
              }
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Base64Tool; 