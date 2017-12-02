import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './todo';


@Injectable()
export class DatabaseProvider {
  mTodos: Array<Todo> = [];
  mTimeFormat: string = "dd/MM";

  constructor(public http: HttpClient) {

  }

  createDatas() {
    while (this.mTodos.length < 10) this.mTodos.push(new Todo());

    this.mTodos[4].description = "";
    this.mTodos[6].isDone = true;

    this.mTodos[8].title = "this is a long title to test wrap text";
    this.mTodos[3].description = "this is a long description to test wrap text,this is a long description to test wrap text";
  }

  removeItem(item: Todo) {
    let idx = this.mTodos.indexOf(item);
    if (idx >= 0) {
      this.mTodos.splice(idx, 1);
    }
  }
}
