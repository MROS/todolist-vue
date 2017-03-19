import Vue from 'vue'

var app = new Vue({
	el: '#app',
	data: {
		newItem: '',
		cond: "all",
		items: [
			{
				text: "兜風",
				completed: false
			},
			{
				text: "看漫畫",
				completed: true
			}
		],
	},
	methods: {
		killCompleted() {
			this.items = this.items.filter((i) => !i.completed);
		},
		addItem() {
			this.items.unshift({text: this.newItem, completed: false});
			this.newItem = '';
		},
		visible(item) {
			switch (this.cond) {
				case "all":
					return true;
				case "completed":
					return item.completed;
				case "notYet":
					return !item.completed;
			}
		},
		deleteItem(index) {
			this.items.splice(index, 1);
		}
	}
})
