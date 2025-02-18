"use client"
import { useEffect, useState } from "react";
import { Tree } from "primereact/tree";
import { TreeNode } from "primereact/treenode";
import { FiPlus, FiTrash, FiFolder, FiFile, FiSettings, FiUsers, FiList, FiKey } from "react-icons/fi";
import { FaFolder, FaFile, FaUser, FaList, FaKey, FaCog } from "react-icons/fa";
import Navbar from "./component/Navbar";
import NodeDetails from "./component/NodeDetails";
import { useAtom } from 'jotai';
import { nodesAtom, selectedNodeAtom, itemAtom } from './atoms/nodeAtoms';
import Loading from './component/Loading';
import DeleteLoading from './component/DeleteLoading';
import AddLoading from './component/AddLoading';

export default function Home() {

  const [isShowNav, setIsShowNav] = useState(true);
  const [isCollapse, setIsCollapse] = useState(true);
  const [expandedKeys, setExpandedKeys] = useState<{ [key: string]: boolean }>({});
  // {
  //   key: "56320ee9-6af6-11ed-a7ba-f220afe5e4a9",
  //   label: "System Management",
  //   children: [
  //     {
  //       key: "56320ee9-6af6-11ed-a7ba-f220afe5e4b0",
  //       label: "System",
  //       children: [
  //         {
  //           key: "56320ee9-6af6-11ed-a7ba-f220afe5e4b1",
  //           label: "System Code",
  //           children: [
  //             {
  //               key: "56320ee9-6af6-11ed-a7ba-f220afe5e4b2",
  //               label: "Code Registration"
  //             }
  //           ]
  //         },
  //         {
  //           key: "56320ee9-6af6-11ed-a7ba-f220afe5e4b3",
  //           label: "Code Registration - 2"
  //         },
  //         {
  //           key: "56320ee9-6af6-11ed-a7ba-f220afe5e4b4",
  //           label: "Properties"
  //         }
  //       ]
  //     },
  //     {
  //       key: "56320ee9-6af6-11ed-a7ba-f220afe5e4b5",
  //       label: "Menus",
  //       children: [
  //         {
  //           key: "56320ee9-6af6-11ed-a7ba-f220afe5e4b6",
  //           label: "Menu Registration"
  //         }
  //       ]
  //     },
  //     {
  //       key: "56320ee9-6af6-11ed-a7ba-f220afe5e4b7",
  //       label: "APIList",
  //       children: [
  //         { key: "56320ee9-6af6-11ed-a7ba-f220afe5e4b8", label: "API Registration" },
  //         { key: "56320ee9-6af6-11ed-a7ba-f220afe5e4b9", label: "API Edit" }
  //       ]
  //     },
  //     {
  //       key: "56320ee9-6af6-11ed-a7ba-f220afe5e4ba",
  //       label: "Users & Groups",
  //       children: [
  //         {
  //           key: "56320ee9-6af6-11ed-a7ba-f220afe5e4bb",
  //           label: "Users",
  //           children: [
  //             { key: "56320ee9-6af6-11ed-a7ba-f220afe5e4bc", label: "User Account Registeration" }
  //           ]
  //         },
  //         {
  //           key: "56320ee9-6af6-11ed-a7ba-f220afe5e4bd",
  //           label: "Groups",
  //           children: [
  //             { key: "56320ee9-6af6-11ed-a7ba-f220afe5e4be", label: "User Group Registeration" }
  //           ]
  //         }
  //       ]
  //     }
  //   ]
  // }
  const [nodes, setNodes] = useAtom(nodesAtom);
  const [selectedNode, setSelectedNode] = useAtom(selectedNodeAtom);
  const [item, setItem] = useAtom(itemAtom);
  const [selectedIconName, setSelectedIconName] = useState('folder');
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const [isAddLoading, setIsAddLoading] = useState(false);

  useEffect(() => {
    if (selectedNode) setSelectedIconName(selectedNode.data?.icon || 'folder');
  }, [selectedNode]);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setIsInitialLoading(true);
        const response = await fetch('/api/treenode');
        if (!response.ok) throw new Error('Failed to fetch nodes');
        const nodes = await response.json();
        setNodes(nodes);
        setItem({ children: nodes });
        if (nodes.length > 0) {
          setSelectedNode(nodes[0]);
        }
      } catch (error) {
        console.error('Error fetching nodes:', error);
      } finally {
        setIsInitialLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  const expandAll = () => {
    const allKeys: { [key: string]: boolean } = {};
    const addKeys = (nodes: any[]) => {
      nodes.forEach(node => {
        allKeys[node.key] = true;
        if (node.children) {
          addKeys(node.children);
        }
      });
    };
    addKeys(item.children);
    setExpandedKeys(allKeys);
    setIsCollapse(false);
  };
  const collapseAll = () => {
    setExpandedKeys({});
    setIsCollapse(true);
  };

  const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };

  
  const getSelectedIcon = (iconName: string) => {
    switch (iconName) {
      case 'folder': return FaFolder;
      case 'file': return FaFile;
      case 'settings': return FaCog;
      case 'users': return FaUser;
      case 'list': return FaList;
      case 'key': return FaKey;
      default: return FaFolder;
    }
  }

  const getIcon = (iconName: string) => {
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

  const SelectedIcon = getSelectedIcon(selectedIconName);

  const nodeTemplate = (node: TreeNode) => {
    const [isHover, setIsHover] = useState(false);
    const Icon = getIcon(node.data?.icon || 'folder');
    const depth = getNodeDepth(node);

    return (
      <div
        className="flex items-center gap-2"
        style={{ paddingLeft: `${depth * 20}px` }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Icon className="w-5 h-5" />
        <span>{node.label}</span>
        {isHover && <div className="flex gap-1">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsAddLoading(true);
              addNode(node);
            }}
            className="p-1 text-xs bg-green-500 text-white rounded-full">
            <FiPlus className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsDeleteLoading(true);
              if (confirm('Are you sure you want to delete this node?')) {
                deleteNode(node);
              }
            }}
            className="p-1 text-xs bg-red-500 text-white rounded-full">
            <FiTrash className="w-4 h-4" />
          </button>
        </div>}
      </div>
    );
  };

  const getNodeDepth = (targetNode: TreeNode): number => {
    const findDepth = (nodes: TreeNode[], depth: number = 0): number => {
      for (const node of nodes) {
        if (node.key === targetNode.key) {
          return depth;
        }
        if (node.children) {
          const childDepth = findDepth(node.children, depth + 1);
          if (childDepth !== -1) {
            return childDepth;
          }
        }
      }
      return -1;
    };
    return findDepth(item.children);
  };

  const getParentNode = (targetNode: TreeNode): TreeNode | null => {
    const findParent = (nodes: TreeNode[], parent: TreeNode | null = null): TreeNode | null => {
      for (const node of nodes) {
        if (node.key === targetNode.key) {
          return parent;
        }
        if (node.children) {
          const found = findParent(node.children, node);
          if (found) {
            return found;
          }
        }
      }
      return null;
    };
    return findParent(item.children);
  };

  const handleUpdateNode = async (updatedNode: TreeNode) => {
    try {
        setIsLoading(true);
        const response = await fetch('/api/treenode', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                key: updatedNode.key,
                label: updatedNode.label,
                icon: updatedNode.data?.icon
            }),
        });

        if (!response.ok) throw new Error('Failed to update node');
        
        // Fetch fresh data
        const fetchResponse = await fetch('/api/treenode');
        if (!fetchResponse.ok) throw new Error('Failed to fetch updated nodes');
        
        const updatedNodes = await fetchResponse.json();
        setNodes(updatedNodes);
        setItem({ children: updatedNodes });
        
        if (selectedNode?.key === updatedNode.key) {
            const updatedSelectedNode = updatedNodes.find((node: TreeNode) => node.key === updatedNode.key);
            if (updatedSelectedNode) {
                setSelectedNode(updatedSelectedNode);
            }
        }
    } catch (error) {
        console.error('Error updating node:', error);
    } finally {
        setIsLoading(false);
    }
  };

  const updateNodeInTree = (nodes: TreeNode[], updatedNode: TreeNode): TreeNode[] => {
    return nodes.map(node => {
      if (node.key === updatedNode.key) {
        return { ...node, ...updatedNode };
      }
      if (node.children) {
        return {
          ...node,
          children: updateNodeInTree(node.children, updatedNode)
        };
      }
      return node;
    });
  };

  const addNode = async (parentNode: TreeNode) => {
    const newNode: TreeNode = {
      key: generateUUID(),
      label: "New Node",
      icon: 'folder',
      children: []
    };

    try {
      const response = await fetch('/api/treenode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newNode),
      });

      if (!response.ok) {
        throw new Error('Failed to create node');
      }

      const createdNode = await response.json();
      
      const updateNodes = (nodes: TreeNode[]): TreeNode[] => {
        return nodes.map(node => {
          if (node.key === parentNode.key) {
            return {
              ...node,
              children: [...(node.children || []), createdNode]
            };
          }
          if (node.children) {
            return {
              ...node,
              children: updateNodes(node.children)
            };
          }
          return node;
        });
      };

      const updatedNodes = updateNodes(nodes);
      setNodes(updatedNodes);
      setItem({
        ...item,
        children: updatedNodes
      });
    } catch (error) {
      console.error('Error adding node:', error);
    } finally {
      setIsAddLoading(false);
    }
  };

  const deleteNode = async (nodeToDelete: TreeNode) => {
    try {
        setIsDeleteLoading(true);
        const response = await fetch('/api/treenode', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                key: nodeToDelete.key
            }),
        });

        if (!response.ok) throw new Error('Failed to delete node');

        // Fetch fresh data
        const fetchResponse = await fetch('/api/treenode');
        if (!fetchResponse.ok) throw new Error('Failed to fetch updated nodes');
        
        const updatedNodes = await fetchResponse.json();
        setNodes(updatedNodes);
        setItem({ children: updatedNodes });

        if (selectedNode?.key === nodeToDelete.key) {
            setSelectedNode(null);
        }
    } catch (error) {
        console.error('Error deleting node:', error);
    } finally {
        setIsDeleteLoading(false);
    }
  };

  if (isInitialLoading) {
    return <Loading />;
  }

  return (
    <>
        {isDeleteLoading && <DeleteLoading />}
        {isAddLoading && <AddLoading />}
        <div className="bg-white min-h-screen text-black flex sm:p-10 py-4">
          {isShowNav ?
            <>
              <div
                className="sm:hidden fixed top-0 left-0 w-full h-full z-50 bg-gray-800 opacity-50"
                onClick={() => setIsShowNav(false)}
                onKeyDown={(e) => e.key === "Escape" && setIsShowNav(false)}
                role="button"
                tabIndex={0}
                aria-label="Close side navigation"
              />
              <div className="max-w-[400px] flex-[1] max-md:fixed  bottom-0 top-0 left-0 overflow-x-auto z-50">
                <Navbar
                  setIsShowNav={setIsShowNav}
                />
              </div>
            </> :
            <button onClick={() => { setIsShowNav(true); }} className="absolute top-10">
              <img src="/image/show.svg" alt="show" />
            </button>
          }
          <div className="flex flex-col flex-[4] gap-3">
            {selectedNode && <div className="sm:flex hidden gap-4 px-12 py-4 text-[#101828] text-[32px] font-bold items-center">
              <SelectedIcon className="w-[52px] h-[52px] px-3 bg-[#253BFF] text-white rounded-full" />
              {selectedNode.label}
            </div>}
            <div className="flex px-12  flex-wrap">
              <div className="flex flex-col gap-7 flex-1">
                <div>
                  <p>{selectedNode && selectedNode.label}</p>
                  <select
                    value={selectedNode?.label || ''}
                    onChange={(e) => {
                      const found = item.children.find((child: TreeNode) => child.label === e.target.value);
                      if (found) setSelectedNode(found);
                    }}
                    className="bg-[#F9FAFB] px-4 py-[18px] rounded-2xl w-full ring-none"
                  >
                    {
                      selectedNode && selectedNode.children?.map((child: any) => (
                        <option value={child.label} key={child.key}>{child.label}</option>
                      ))
                    }
                  </select>
                </div>
                <div className="flex gap-2">
                  <button
                    className={`${isCollapse ? "bg-white text-[#475467] border-[1px] border-[#D0D5DD]"
                      : "bg-[#1D2939] text-white"} 
                      rounded-full w-[130px] h-[38px] text-sm font-bold`} onClick={expandAll}>
                    Expand All
                  </button>
                  <button
                    className={`${!isCollapse ? "bg-white text-[#475467] border-[1px] border-[#D0D5DD]"
                      : "bg-[#1D2939] text-white"} 
                      rounded-full w-[130px] h-[38px] text-sm font-bold`} onClick={collapseAll}>
                    Collapse All
                  </button>
                </div>
                <Tree
                  value={item.children}
                  nodeTemplate={nodeTemplate}
                  expandedKeys={expandedKeys}
                  onToggle={e => setExpandedKeys(e.value)}
                  onSelect={e => setSelectedNode(e.node)}
                  selectionMode="single"
                />
              </div>
              <NodeDetails
                onUpdate={handleUpdateNode}
                onAdd={(parentNode: TreeNode) => {
                  addNode(parentNode);
                }}
                onDelete={(node: TreeNode) => {
                  deleteNode(node);
                }}
                getNodeDepth={getNodeDepth}
                getParentNode={getParentNode}
              />
            </div>

          </div>
        </div>
    </>
  );
}
