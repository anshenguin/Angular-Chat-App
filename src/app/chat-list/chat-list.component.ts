import { Component, OnInit } from '@angular/core';
import { ChatListItemModel } from './chat-list-item.model';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
  chatList = [];
  constructor() { 
     this.chatList.push(new ChatListItemModel("https://www.usamortgageexperts.com/wp-client_data/21889/2237/uploads/bb-plugin/cache/image-placeholder-female-circle.png","Anshul","Hello! How are you?"));
    this.chatList.push(new ChatListItemModel("https://www.usamortgageexperts.com/wp-client_data/21889/2237/uploads/bb-plugin/cache/image-placeholder-female-circle.png","Anshul","Hello! How are you?"));
    this.chatList.push(new ChatListItemModel("https://www.usamortgageexperts.com/wp-client_data/21889/2237/uploads/bb-plugin/cache/image-placeholder-female-circle.png","Anshul","Hello! How are you?"));
    this.chatList.push(new ChatListItemModel("https://www.usamortgageexperts.com/wp-client_data/21889/2237/uploads/bb-plugin/cache/image-placeholder-female-circle.png","Anshul","Hello! How are you?"));
  }

  ngOnInit() {
  }

  getListSize(){
    return this.chatList.length;
  }


}