// Performs Dijkstra's algorithm; returns *all* nodes in the order
// in which they were visited. Also makes nodes point back to their
// previous node, effectively allowing us to compute the shortest path
// by backtracking from the finish node.

interface NodeType {
    row: number;
    col: number;
    isFinish: boolean;
    isStart: boolean;
    isWall: boolean;
    distance: number;
    isVisited: boolean;
    previousNode: NodeType | null;
  }

export function dijkstra(grid: NodeType[][], startNode: NodeType, finishNode: NodeType): NodeType[] { // Specify types for parameters
    const visitedNodesInOrder: NodeType[] = [];
    startNode.distance = 0;
    const unvisitedNodes = getAllNodes(grid);
    
    while (unvisitedNodes.length > 0) {
        sortNodesByDistance(unvisitedNodes);
        const closestNode = unvisitedNodes.shift(); // closestNode can be undefined

        // Check if closestNode is undefined
        if (!closestNode) {
            break; // Exit the loop if there are no more nodes to process
        }

        // If we encounter a wall, we skip it.
        if (closestNode.isWall) continue;

        // If the closest node is at a distance of infinity,
        // we must be trapped and should therefore stop.
        if (closestNode.distance === Infinity) return visitedNodesInOrder;

        closestNode.isVisited = true;
        visitedNodesInOrder.push(closestNode);

        if (closestNode === finishNode) return visitedNodesInOrder;
        updateUnvisitedNeighbors(closestNode, grid);
    }

    return visitedNodesInOrder; // Ensure the function always returns a value
}

function sortNodesByDistance(unvisitedNodes: NodeType[]): void { // Specify types for parameters
    unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function updateUnvisitedNeighbors(node: NodeType, grid: NodeType[][]): void { // Specify types for parameters
    const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
    for (const neighbor of unvisitedNeighbors) {
        neighbor.distance = node.distance + 1;
        neighbor.previousNode = node;
    }
}

function getUnvisitedNeighbors(node: NodeType, grid: NodeType[][]): NodeType[] { // Specify types for parameters
    const neighbors: NodeType[] = [];
    const { col, row } = node;
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    return neighbors.filter(neighbor => !neighbor.isVisited);
}

function getAllNodes(grid: NodeType[][]): NodeType[] { // Specify types for parameters
    const nodes: NodeType[] = [];
    for (const row of grid) {
        for (const node of row) {
            nodes.push(node);
        }
    }
    return nodes;
}

// Backtracks from the finishNode to find the shortest path.
// Only works when called *after* the dijkstra method above.
export function getNodesInShortestPathOrder(finishNode: NodeType): NodeType[] { // Specify types for parameters
    const nodesInShortestPathOrder: NodeType[] = [];
    let currentNode: NodeType | null = finishNode; // Ensure currentNode can be null

    while (currentNode !== null) {
        nodesInShortestPathOrder.unshift(currentNode);
        currentNode = currentNode.previousNode; // currentNode can be null here
    }

    return nodesInShortestPathOrder;
}