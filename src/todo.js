import Vue from 'vue'

var app = new Vue({
	el: '#app',
	data: {
		newItem: '',
		cond: "all",
		items: [
			{
				text: "兜風",
				completed: false,
				changing: false
			},
			{
				text: "看漫畫",
				completed: true,
				changing: false
			}
		],
	},
	methods: {
		killCompleted() {
			this.items = this.items.filter((i) => !i.completed);
		},
		addItem() {
			this.items.unshift({
				text: this.newItem,
				completed: false,
				changing: false
			});
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
		input_mode(index) {
			this.items[index].changing = true;
			this.$nextTick(function () {
				var dom = this.$refs["input" + index][0]
				dom.focus();
			}.bind(this));
		},
		changeText(item) {
			item.changing = false;
		},
		deleteItem(index) {
			this.items.splice(index, 1);
		}
	}
})
