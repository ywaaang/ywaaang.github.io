import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Copy, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const JsonViewer = ({ data, onCopy }) => {
  const [expandedKeys, setExpandedKeys] = useState(new Set());
  const [copiedPath, setCopiedPath] = useState('');
  const [allPaths, setAllPaths] = useState(new Set());

  // 递归获取所有可展开的路径
  const getAllExpandablePaths = (obj, path = '', paths = new Set()) => {
    if (Array.isArray(obj) && obj.length > 0) {
      paths.add(path);
      obj.forEach((item, index) => {
        const currentPath = path ? `${path}.${index}` : index.toString();
        getAllExpandablePaths(item, currentPath, paths);
      });
    } else if (obj && typeof obj === 'object' && Object.keys(obj).length > 0) {
      paths.add(path);
      Object.entries(obj).forEach(([key, value]) => {
        const currentPath = path ? `${path}.${key}` : key;
        getAllExpandablePaths(value, currentPath, paths);
      });
    }
    return paths;
  };

  // 当数据变化时，默认展开所有节点
  useEffect(() => {
    if (data) {
      const paths = getAllExpandablePaths(data);
      setAllPaths(paths);
      setExpandedKeys(paths);
    }
  }, [data]);

  // 展开所有节点
  const expandAll = () => {
    setExpandedKeys(new Set(allPaths));
  };

  // 收起所有节点
  const collapseAll = () => {
    setExpandedKeys(new Set());
  };

  const toggleExpanded = (path) => {
    const newExpanded = new Set(expandedKeys);
    if (newExpanded.has(path)) {
      newExpanded.delete(path);
    } else {
      newExpanded.add(path);
    }
    setExpandedKeys(newExpanded);
  };

  const copyValue = async (value, path) => {
    try {
      const textValue = typeof value === 'string' ? value : JSON.stringify(value, null, 2);
      await navigator.clipboard.writeText(textValue);
      setCopiedPath(path);
      setTimeout(() => setCopiedPath(''), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  const getValueType = (value) => {
    if (value === null) return 'null';
    if (typeof value === 'boolean') return 'boolean';
    if (typeof value === 'number') return 'number';
    if (typeof value === 'string') return 'string';
    if (Array.isArray(value)) return 'array';
    if (typeof value === 'object') return 'object';
    return 'unknown';
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'string': return 'text-green-700';
      case 'number': return 'text-blue-700';
      case 'boolean': return 'text-purple-700';
      case 'null': return 'text-gray-600';
      case 'array': return 'text-orange-700';
      case 'object': return 'text-red-700';
      default: return 'text-gray-700';
    }
  };

  const renderValue = (value, key, path = '', level = 0) => {
    const valueType = getValueType(value);
    const currentPath = path ? `${path}.${key}` : key;
    const isExpanded = expandedKeys.has(currentPath);
    const hasChildren = (Array.isArray(value) && value.length > 0) || 
                       (typeof value === 'object' && value !== null && Object.keys(value).length > 0);
    
    const isEmpty = (Array.isArray(value) && value.length === 0) || 
                   (typeof value === 'object' && value !== null && Object.keys(value).length === 0);

    return (
      <div key={currentPath} className={`${level > 0 ? 'ml-4' : ''}`}>
        <div className="flex items-center group hover:bg-blue-50 rounded px-2 py-1 transition-colors">
          {/* 展开/收起按钮 */}
          {hasChildren && (
            <button
              onClick={() => toggleExpanded(currentPath)}
              className="flex items-center justify-center w-4 h-4 mr-2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            </button>
          )}
          
          {/* 如果没有子元素，添加占位符保持对齐 */}
          {!hasChildren && <div className="w-4 h-4 mr-2" />}

          {/* 键名 */}
          {key !== '' && (
            <span className="text-blue-800 font-medium mr-2">
              "{key}":
            </span>
          )}

          {/* 值预览 */}
          <span className={`${getTypeColor(valueType)} flex-1`}>
            {valueType === 'string' && `"${value}"`}
            {valueType === 'number' && value}
            {valueType === 'boolean' && value.toString()}
            {valueType === 'null' && 'null'}
            {valueType === 'array' && isEmpty && '[]'}
            {valueType === 'object' && isEmpty && '{}'}
            {valueType === 'array' && !isEmpty && !isExpanded && `Array(${value.length})`}
            {valueType === 'object' && !isEmpty && !isExpanded && `Object(${Object.keys(value).length})`}
            {valueType === 'array' && !isEmpty && isExpanded && '['}
            {valueType === 'object' && !isEmpty && isExpanded && '{'}
          </span>

          {/* 复制按钮 */}
          <Button
            size="sm"
            variant="ghost"
            className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 h-6 w-6 p-0"
            onClick={() => copyValue(value, currentPath)}
          >
            {copiedPath === currentPath ? (
              <CheckCircle size={12} className="text-green-600" />
            ) : (
              <Copy size={12} />
            )}
          </Button>
        </div>

        {/* 展开的子内容 */}
        {hasChildren && isExpanded && (
          <div className="ml-2">
            {Array.isArray(value) ? (
              value.map((item, index) => (
                renderValue(item, index, currentPath, level + 1)
              ))
            ) : (
              Object.entries(value).map(([childKey, childValue]) => (
                renderValue(childValue, childKey, currentPath, level + 1)
              ))
            )}
          </div>
        )}

        {/* 闭合括号 */}
        {hasChildren && isExpanded && !isEmpty && (
          <div className={`${level > 0 ? 'ml-4' : ''} ml-6`}>
            <span className={getTypeColor(valueType)}>
              {valueType === 'array' ? ']' : '}'}
            </span>
          </div>
        )}
      </div>
    );
  };

  if (data === null || data === undefined) {
    return (
      <div className="p-4 text-gray-500 text-center">
        暂无数据
      </div>
    );
  }

  return (
    <div className="font-mono text-sm bg-white border rounded-lg max-h-[500px] overflow-hidden">
      {/* 工具栏 */}
      <div className="flex items-center justify-between p-2 border-b bg-gray-50">
        <span className="text-xs text-gray-600">JSON树形视图</span>
        <div className="flex gap-1">
          <Button
            size="sm"
            variant="outline"
            onClick={expandAll}
            className="h-6 px-2 text-xs"
          >
            全部展开
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={collapseAll}
            className="h-6 px-2 text-xs"
          >
            全部收起
          </Button>
        </div>
      </div>
      
      {/* 内容区域 */}
      <div className="p-4 overflow-y-auto max-h-[450px]">
        <div className="select-text">
          {renderValue(data, '', '', 0)}
        </div>
      </div>
    </div>
  );
};

export default JsonViewer; 