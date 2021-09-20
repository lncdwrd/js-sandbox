class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(function(item) {
      if (item !== fn) {
        return item;
      }
    });

    console.log(`You are now unsubscribed from ${fn.name}`);
  }

  fire() {
    this.observers.forEach(function(item) {
      item.call();
    });
  }
}

const click = new EventObserver();
const subscribe = document.querySelector('.sub-ms');
const unsubscribe = document.querySelector('.unsub-ms');
const fire = document.querySelector('.fire');

const getCurlMilliseconds = function() {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
};

subscribe.addEventListener('click', () => {
  click.subscribe(getCurlMilliseconds)
});

unsubscribe.addEventListener('click', () => {
  click.unsubscribe(getCurlMilliseconds)
}); 

fire.addEventListener('click', () => {
  click.fire();
});