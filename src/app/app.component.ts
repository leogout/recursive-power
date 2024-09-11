import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TreeNode } from './model';
import { TreeNodeComponent } from './tree-node/tree-node.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TreeNodeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  treeData: TreeNode[] = [
    {
      name: 'Root',
      children: [
        {
          name: 'Child 1',
          children: [{ name: 'Grandchild 1.1' }, { name: 'Grandchild 1.2' }],
        },
        { name: 'Child 2' },
      ],
    },
  ];
}
