import { TreeNode } from "primereact/treenode";
import { FiFolder, FiFile, FiSettings, FiUsers, FiList, FiKey } from "react-icons/fi";
import { FaFolder, FaFile, FaUser, FaList, FaKey, FaCog } from "react-icons/fa";
import { useAtom } from 'jotai';
import { selectedNodeAtom, itemAtom, nodesAtom, isLoadingAtom } from '../atoms/nodeAtoms';

interface TreeViewProps {
  node: TreeNode;
  parentNodes: TreeNode[];
}

const getIcon = (iconName: string, isSelected: boolean, isParent: boolean) => {
  if (isSelected || isParent) {
    switch (iconName) {
      case 'folder': return  FaFolder;
      case 'file': return FaFile;
      case 'settings': return FaCog;
      case 'users': return FaUser;
      case 'list': return FaList;
      case 'key': return FaKey;
      default: return FaFolder;
    }
  }

  switch (iconName) {
    case 'folder': return FiFolder;
    case 'file': return FiFile;
    case 'settings': return FiSettings;
    case 'users': return FiUsers;
    case 'list': return FiList;
    case 'key': return FiKey;
    default: return FiFolder;
  }
};

const TreeView = ({ node, parentNodes }: TreeViewProps) => {
  const [selectedNode, setSelectedNode] = useAtom(selectedNodeAtom);
  const [isLoading] = useAtom(isLoadingAtom);
  const [item] = useAtom(itemAtom);
  const [nodes] = useAtom(nodesAtom);
  
  const Icon = getIcon(
    node.data?.icon || 'folder',
    node.key === selectedNode?.key,
    parentNodes.some(parent => parent.key === node.key)
  );

  // Find the current version of the node from nodes array
  const currentNode = nodes.find(n => n.key === node.key) || node;
  const isCurrentNode = currentNode.key === selectedNode?.key;
  const isParentOfSelected = parentNodes.some(parent => parent.key === currentNode.key);
  
  const isSiblingLevel = selectedNode && 
    parentNodes[parentNodes.length - 1]?.children?.some(sibling => 
      sibling.key === node.key
    );

  const isChildLevel = selectedNode?.children?.some(child => 
    parentNodes[parentNodes.length - 1]?.children?.some(sibling => 
      sibling.key === child.key
    )
  );

  const getNodeStyle = () => {
    if (isCurrentNode) return 'bg-[#9FF443] text-white hover:bg-[#8EE332]';
    if (isParentOfSelected) return 'bg-[#1D2939] hover:bg-blue-500';
    return 'hover:bg-blue-500';
  };
  const shouldShow = !selectedNode || 
    isCurrentNode || 
    isParentOfSelected || 
    parentNodes.length === 0 ||
    isSiblingLevel ||
    isChildLevel;

  if (!shouldShow) return null;

  const handleNodeClick = () => {
    // Use the current version of the node when selecting
    setSelectedNode(currentNode);
  };

  return (
    <div className="text-white py-2 px-2">
      <div 
        className={`flex items-center gap-2 p-2 rounded-xl cursor-pointer ${getNodeStyle()}`}
        onClick={handleNodeClick}
      >
        <Icon className={`w-4 h-4 ${isCurrentNode ? 'text-black' : ''}`} />
        <span className={`text-sm ${isCurrentNode ? 'text-black' : ''}`}>{currentNode.label}</span>
      </div>
        <div>
          {(currentNode.children || []).map((child) => (
            <TreeView 
              key={child.key} 
              node={child} 
              parentNodes={[...parentNodes, currentNode]}
            />
          ))}
        </div>
      {isLoading && (
        <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
          <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
        </div>
      )}
    </div>
  );
};

export default TreeView; 