/* tslint:disable:no-unused-variable */
import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";

import { TodoService } from "./todo.service";
import { TodosComponent } from "./todos.component";

//NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not
// provided the TodoService as a dependency to TodosComponent.
//
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below.

describe("TodosComponent", () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodosComponent],
      imports: [HttpClientModule],
      providers: [TodoService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should load todos from the server", fakeAsync(() => {
    let service = TestBed.get(TodoService);
    // fixture.debugElement.injector.get(TodoService);
    spyOn(service, "getTodosPromise").and.returnValue(
      Promise.resolve([1, 2, 3])
    );
    fixture.detectChanges();

    tick();
    expect(component.todos.length).toBe(3);
  }));
});
