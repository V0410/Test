import { prisma } from '@/prisma/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const nodes = await prisma.treeNode.findMany({
            include: {
                children: true
            }
        });
        
        // Filter to get only root nodes (nodes without parents)
        const rootNodes = nodes.filter((node: any) => !node.parentId);
        
        // Function to build tree structure
        const buildTree = (nodes: any[]): any[] => {
            return nodes.map((node: any) => ({
                key: node.key,
                label: node.label,
                data: { icon: node.icon },
                children: node.children ? buildTree(node.children) : []
            }));
        };

        return NextResponse.json(buildTree(rootNodes));
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch nodes' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json();
        
        // Create the new node
        const node = await prisma.treeNode.create({
            data: {
                key: data.key,
                label: data.label,
                icon: data.icon,
                parentId: data.parentId,
            },
            include: {
                children: true // Include children in the response
            }
        });

        // If the parent exists, update its children array
        if (data.parentId) {
            await prisma.treeNode.update({
                where: {
                    key: data.parentId
                },
                data: {
                    children: {
                        connect: {
                            id: node.id
                        }
                    }
                }
            });
        }

        return NextResponse.json(node);
    } catch (error) {
        console.error('Error creating node:', error);
        return NextResponse.json(
            { error: 'Failed to create node' }, 
            { status: 500 }
        );
    }
}

export async function PUT(request: Request) {
    try {
        const data = await request.json();
        const node = await prisma.treeNode.update({
            where: { key: data.key },
            data: {
                label: data.label,
                icon: data.icon
            },
            include: {
                children: true
            }
        });
        
        // Return updated node with proper structure
        return NextResponse.json({
            key: node.key,
            label: node.label,
            data: { icon: node.icon },
            children: node.children.map((child: any) => ({
                key: child.key,
                label: child.label,
                data: { icon: child.icon }
            }))
        });
    } catch (error) {
        console.error('Error updating node:', error);
        return NextResponse.json({ error: 'Failed to update node' }, { status: 500 });
    }
} 

export async function DELETE(request: Request) {
    try {
        const data = await request.json();
        const { key } = data;

        if (!key) {
            return NextResponse.json({ error: 'Key is required' }, { status: 400 });
        }

        await prisma.treeNode.delete({
            where: {
                key: key
            }
        });
        
        return NextResponse.json({ message: 'Node deleted successfully' });
    } catch (error) {
        console.error('Error deleting node:', error);
        return NextResponse.json({ error: 'Failed to delete node' }, { status: 500 });
    }
} 