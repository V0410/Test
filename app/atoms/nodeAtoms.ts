import { atom } from 'jotai';
import { TreeNode } from 'primereact/treenode';

export const nodesAtom = atom<TreeNode[]>([]);
export const selectedNodeAtom = atom<TreeNode | null>(null);
export const itemAtom = atom<any>({ children: [] });
export const isLoadingAtom = atom<boolean>(false); 