import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Code, Database, Link, Palette, Hash, Globe } from "lucide-react";
import JsonFormatter from "./tools/JsonFormatter.jsx";
import Base64Tool from "./tools/Base64Tool.jsx";
import UrlEncoder from "./tools/UrlEncoder.jsx";

const App = () => {
  const [activeTab, setActiveTab] = useState("json-formatter");

  const tools = [
    {
      id: "json-formatter",
      title: "JSON格式化",
      description: "JSON格式化、验证和递归解析工具",
      icon: <Code className="h-4 w-4" />,
      component: <JsonFormatter />,
    },
    {
      id: "base64-tool",
      title: "Base64编码",
      description: "Base64编码和解码工具",
      icon: <Database className="h-4 w-4" />,
      component: <Base64Tool />,
    },
    {
      id: "url-encoder",
      title: "URL编码",
      description: "URL编码和解码工具",
      icon: <Link className="h-4 w-4" />,
      component: <UrlEncoder />,
    },
  ];

  const currentTool = tools.find(tool => tool.id === activeTab);

  return (
    <div className="h-screen flex bg-gray-50">
      {/* 左侧Tab栏 */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col shadow-sm">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-lg font-bold text-gray-900">前端工具箱</h1>
          <p className="text-sm text-gray-600 mt-1">选择您需要的工具</p>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          <div className="p-2 space-y-1">
            {tools.map((tool) => (
              <Button
                key={tool.id}
                variant={activeTab === tool.id ? "default" : "ghost"}
                className={`w-full justify-start h-auto p-3 ${
                  activeTab === tool.id
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab(tool.id)}
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-0.5">
                    {tool.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-medium text-sm">{tool.title}</div>
                    <div className="text-xs opacity-80 mt-1">{tool.description}</div>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* 右侧内容区域 */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full p-6 overflow-y-auto">
          {currentTool?.component}
        </div>
      </div>
    </div>
  );
};

export default App; 