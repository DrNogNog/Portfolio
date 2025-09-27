import { Component } from 'react';
import Node from '../components/Node';
import { dijkstra, getNodesInShortestPathOrder } from '../components/dijkstra';

import '../styles/Node.css';

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;

interface NodeType {
  row: number;
  col: number;
  isStart: boolean;
  isFinish: boolean;
  isWall: boolean;
  distance: number;
  isVisited: boolean;
  previousNode: NodeType | null;
}

interface AlgorithmState {
  grid: NodeType[][];
  mouseIsPressed: boolean;
}

export default class Algorithm extends Component<{}, AlgorithmState> {
  state: AlgorithmState = {
    grid: [],
    mouseIsPressed: false,
  };

  componentDidMount() {
    this.setState({ grid: this.getInitialGrid() });
  }

  getInitialGrid(): NodeType[][] {
    const grid: NodeType[][] = [];
    for (let row = 0; row < 20; row++) {
      const currentRow: NodeType[] = [];
      for (let col = 0; col < 50; col++) {
        currentRow.push(this.createNode(row, col));
      }
      grid.push(currentRow);
    }
    return grid;
  }

  createNode(row: number, col: number): NodeType {
    return {
      row,
      col,
      isStart: row === START_NODE_ROW && col === START_NODE_COL,
      isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
      distance: Infinity,
      isVisited: false,
      isWall: false,
      previousNode: null,
    };
  }

  toggleWall(row: number, col: number) {
    const newGrid = this.state.grid.map(r => r.map(n => ({ ...n })));
    const node = newGrid[row][col];
    newGrid[row][col] = { ...node, isWall: !node.isWall };
    return newGrid;
  }

  handleMouseDown = (row: number, col: number) => {
    this.setState({ grid: this.toggleWall(row, col), mouseIsPressed: true });
  };

  handleMouseEnter = (row: number, col: number) => {
    if (!this.state.mouseIsPressed) return;
    this.setState({ grid: this.toggleWall(row, col) });
  };

  handleMouseUp = () => this.setState({ mouseIsPressed: false });

  visualizeDijkstra = () => {
    const { grid } = this.state;
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    this.animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  };

  animateDijkstra(visitedNodesInOrder: NodeType[], nodesInShortestPathOrder: NodeType[]) {
    for (let i = 0; i < visitedNodesInOrder.length; i++) {
      const node = visitedNodesInOrder[i];
      setTimeout(() => {
        const element = document.getElementById(`node-${node.row}-${node.col}`);
        if (element) element.classList.add('node-visited');
      }, 10 * i);
    }

    // Animate shortest path after all visited nodes are done
    setTimeout(() => {
      this.animateShortestPath(nodesInShortestPathOrder);
    }, 10 * visitedNodesInOrder.length);
  }

  animateShortestPath(nodesInShortestPathOrder: NodeType[]) {
    nodesInShortestPathOrder.forEach((node, i) => {
      setTimeout(() => {
        const element = document.getElementById(`node-${node.row}-${node.col}`);
        if (element) element.classList.add('node-shortest-path');
      }, 50 * i);
    });
  }

  // Reset grid completely
  resetGrid = () => {
    const newGrid = this.getInitialGrid();
    this.setState({ grid: newGrid }, () => {
      // Remove all animation classes from the DOM
      for (let row = 0; row < newGrid.length; row++) {
        for (let col = 0; col < newGrid[0].length; col++) {
          const element = document.getElementById(`node-${row}-${col}`);
          if (element) {
            element.classList.remove('node-visited', 'node-shortest-path');
          }
        }
      }
    });
  };

  render() {
    const { grid, mouseIsPressed } = this.state;

    return (
      <div className="algorithm-container">
        <div style={{ marginBottom: '10px' }}>
          <button
            onClick={this.visualizeDijkstra}
            className="visualize-btn"
            type="button"
          >
            Visualize Dijkstra's Algorithm
          </button>
          <button
            onClick={this.resetGrid}
            className="visualize-btn"
            type="button"
            style={{ marginLeft: '10px' }}
          >
            Reset Grid
          </button>
        </div>

        {mouseIsPressed && <div className="mouse-pressed-message">Mouse is pressed!</div>}

        <div className="grid-dijkstra">
          {grid.map((row, rowIdx) => (
            <div className="grid-row" key={rowIdx}>
              {row.map(node => (
                <Node
                  key={`${node.row}-${node.col}`}
                  {...node}
                  onMouseDown={this.handleMouseDown}
                  onMouseEnter={this.handleMouseEnter}
                  onMouseUp={this.handleMouseUp}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
