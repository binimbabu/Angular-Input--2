Different way of component communication

1. Parent to child communication
2. Child to parent communication
3. Sibling component communication

After creating child component we are giving selector of child component (child component name is child) in app.component.html, hence child component is the child of parent  component ( i.e. parent component is app.component.html) shown below

app.component.html

<app-child></app-child>

From app.component.hmtl ( i.e parent component) we want to pass data to the 'child' component, for that we use the decorator @Input()


app.component.ts


export class AppComponent {
  titleValue:any;
  parentTitle:any;
  passValue(value:any){
    this.parentTitle = value;
  }
}


app.component.hmtl

<input type="text" [(ngModel)]="titleValue"/>
<button (click)="passValue(titleValue)">Pass Data</button>
<app-child [title]="parentTitle"></app-child>


child.component.ts

export class ChildComponent {
@Input() title:any;
}


child component.html


<p>child works! - {{title}}</p>




Whenever parentTitle in  <app-child [title]="parentTitle"></app-child> gets updated the title gets the updated value and that passes to child component, Child.component.ts file will receive the value from psrent in title in  @Input() title:any
Whenever the component has @Input decorator then only we can use ngOnChanges() . The child component has @Input decorator in its ts file.
ngOnChanges are used when parent component passes data to child component and in the child.component.ts when we receive the value and we want to manipulate the value obtained in @Input ( here 'title' ) then we use ngOnChanges (in the child component ts file) .
