/** TreeNode: node for a general tree. */

class TreeNode {
    constructor(val, children = []) {
        this.val = val;
        this.children = children;
    }

    /** sumValues(): add up all of the values in the tree. */

    sumValues() {
        let sum = 0;
        const toVisitQueue = [this];
        if (!this.val && !this.children) return sum;
        sum = sum + this.val;
        while (toVisitQueue.length) {
            const current = toVisitQueue.shift();
            for (let node of current.children) {
                sum = sum + node.val;
            }
            for (let child of current.children) {
                toVisitQueue.push(child);
            }
        }
        return sum;
    }

    countEvens() {
        let count = 0;
        const toVisitQueue = [this];
        // if (this.val % 2 === 0) count = count + this.val;
        while (toVisitQueue.length) {
            const current = toVisitQueue.shift();
            for (let node of current.children) {
                if (node.val % 2 === 0) count = count + 1;
            }
            for (let child of current.children) {
                toVisitQueue.push(child);
            }
        }
        return count;
    }

    numGreater(lowerBound) {
        let highNumCount = 0;
        const toVisitQueue = [this];
        if (this.val > lowerBound) highNumCount++;
        while (toVisitQueue.length) {
            const current = toVisitQueue.shift();
            for (let node of current.children) {
                if (node.val > lowerBound) highNumCount++;
            }
            for (let child of current.children) {
                toVisitQueue.push(child);
            }
        }
        return highNumCount;
    }
}

class Tree {
    constructor(root) {
        this.root = root;
    }

    sumTreeNums() {
        if (this.root === undefined) return 0;
        return this.root.sumValues();
    }
    /** countEvens(): count all of the nodes in the tree with even values. */

    countTreeEvens() {
        if (this.root === undefined) return 0;
        return this.root.countEvens();
    }

    /** numGreater(lowerBound): return a count of the number of nodes
     * whose value is greater than lowerBound. */

    treeNumGreater(lowerBound) {
        if (this.root === undefined) return 0;
        return this.root.numGreater(lowerBound);
    }
}

// let branches = new TreeNode(1);

// let branchA = new TreeNode(2);
// let branchB = new TreeNode(3);
// let branchC = new TreeNode(4);

// branches.children.push(branchA);
// branches.children.push(branchB);
// branches.children.push(branchC);

// let leafA1 = new TreeNode(5);
// let leafA2 = new TreeNode(6);
// let leafA3 = new TreeNode(7);
// let leafB1 = new TreeNode(8);
// let leafB2 = new TreeNode(9);
// let leafB3 = new TreeNode(10);
// let leafC1 = new TreeNode(11);
// let leafC2 = new TreeNode(12);
// let leafC3 = new TreeNode(13);

// branchA.children.push(leafA1);
// branchA.children.push(leafA2);
// branchA.children.push(leafA3);
// branchB.children.push(leafB1);
// branchB.children.push(leafB2);
// branchB.children.push(leafB3);
// branchC.children.push(leafC1);
// branchC.children.push(leafC2);
// branchC.children.push(leafC3);

// let tree = new Tree(branches);

// branches.sumValues();

// let smallTree;
// let nSmall = new TreeNode(1);
// let nSmall2 = new TreeNode(2);
// nSmall.children.push(nSmall2);
// smallTree = new Tree(nSmall);
// smallTree.sumValues();

// let smallTree = new Tree(1);

// smallTree.sumTreeNums();

module.exports = { Tree, TreeNode };
