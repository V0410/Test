import { TreeNode } from "primereact/treenode";
import TreeView from './TreeView';
import { useAtom } from 'jotai';
import { selectedNodeAtom, nodesAtom } from '../atoms/nodeAtoms';

interface NavbarProps {
  setIsShowNav: (isShowNav: boolean) => void;
}

export default function Navbar({ setIsShowNav }: NavbarProps) {
  const [selectedNode, setSelectedNode] = useAtom(selectedNodeAtom);
  const [nodes] = useAtom(nodesAtom);

  const findParentNodes = (nodes: TreeNode[], target: TreeNode | null): TreeNode[] => {
    if (!target) return [];
    
    const search = (currentNode: TreeNode, path: TreeNode[] = []): TreeNode[] => {
      if (currentNode.key === target.key) return path;
      
      if (currentNode.children) {
        for (const child of currentNode.children) {
          const result = search(child, [...path, currentNode]);
          if (result.length) return result;
        }
      }
      return [];
    };

    for (const node of nodes) {
      const result = search(node, []);
      if (result.length) return result;
    }
    return [];
  };

  const parentNodes = findParentNodes(nodes, selectedNode);

  return (
    <div className="px-4 py-8 bg-[#10182B] rounded-3xl min-h-[100%]">
      <div className="flex justify-between p-8">
        <img src="/image/logo.svg" alt="logo"/>
        <button onClick={() => {setIsShowNav(false);}}>
          <img src="/image/hidden.svg" alt="hidden"/>
        </button>
      </div>
      {nodes.length > 0 ? (
        <TreeView 
          node={{ key: 'root', label: 'Root', children: nodes }}
          parentNodes={parentNodes}
        />
      ) : (
        <div className="text-white p-4">Loading nodes...</div>
      )}
    </div>
  );
}