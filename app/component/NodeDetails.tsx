import { useState, useEffect } from 'react';
import { TreeNode } from "primereact/treenode";
import { FiFolder, FiFile, FiSettings, FiUsers, FiList, FiKey } from "react-icons/fi";
import { useAtom } from 'jotai';
import { selectedNodeAtom } from '../atoms/nodeAtoms';

interface NodeDetailsProps {
    onUpdate: (node: TreeNode) => void;
    onAdd: (parentNode: TreeNode) => void;
    onDelete: (node: TreeNode) => void;
    getNodeDepth: (node: TreeNode) => number;
    getParentNode: (node: TreeNode) => TreeNode | null;
}

const AVAILABLE_ICONS = [
    { icon: FiFolder, name: 'folder' },
    { icon: FiFile, name: 'file' },
    { icon: FiSettings, name: 'settings' },
    { icon: FiUsers, name: 'users' },
    { icon: FiList, name: 'list' },
    { icon: FiKey, name: 'key' }
];

export default function NodeDetails({ onUpdate, onAdd, onDelete, getNodeDepth, getParentNode }: NodeDetailsProps) {
    const [selectedNode, setSelectedNode] = useAtom(selectedNodeAtom);
    const [isLoading, setIsLoading] = useState(false);
    const [localNode, setLocalNode] = useState<TreeNode | null>(selectedNode);

    useEffect(() => {
        setLocalNode(selectedNode);
    }, [selectedNode]);

    if (!selectedNode || !localNode) {
        return <div className="flex-1 p-4">Select a node to view details</div>;
    }

    const handleChange = (field: string, value: string) => {
        const updatedNode = { ...localNode };
        if (!updatedNode.data) updatedNode.data = {};
        updatedNode.data[field] = value;
        setLocalNode(updatedNode);
    };

    const handleSave = async () => {
        if (localNode) {
            try {
                setIsLoading(true);
                await onUpdate(localNode);
            } catch (error) {
                console.error('Error updating node:', error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <div className="flex-1 p-4 space-y-4">
            <div className="space-y-2">
                <label className="block text-sm font-medium">{selectedNode.label} ID</label>
                <input
                    type="text"
                    value={selectedNode.key}
                    readOnly
                    className="w-full p-2 border rounded-lg bg-gray-50 font-mono text-sm"
                />
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-medium">Depth</label>
                <input
                    type="text"
                    value={getNodeDepth(selectedNode)}
                    readOnly
                    className="w-full p-2 border rounded-lg bg-gray-50"
                />
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-medium">Parent Node</label>
                <input
                    type="text"
                    value={getParentNode(selectedNode)?.label || 'Root'}
                    readOnly
                    className="w-full p-2 border rounded-lg bg-gray-50"
                />
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-medium">Icon</label>
                <div className="flex gap-2 flex-wrap">
                    {AVAILABLE_ICONS.map(({ icon: Icon, name }) => (
                        <button
                            key={name}
                            onClick={() => handleChange('icon', name)}
                            className={`p-2 rounded-lg border ${localNode.data?.icon === name ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
                                }`}
                        >
                            <Icon className="w-5 h-5" />
                        </button>
                    ))}
                </div>
            </div>
            <div className="space-y-2">
                <label className="block text-sm font-medium">Node Name</label>
                <input
                    type="text"
                    value={localNode.label}
                    onChange={(e) => {
                        setLocalNode({ ...localNode, label: e.target.value });
                    }}
                    className="w-full p-2 border rounded-lg"
                />
            </div>
            <button
                onClick={handleSave}
                disabled={isLoading}
                className={`p-2 bg-blue-500 text-white hover:bg-blue-600 w-1/2 rounded-full 
                    ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                title="Save changes"
            >
                {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Saving...
                    </div>
                ) : 'Save'}
            </button>
        </div>
    );
} 