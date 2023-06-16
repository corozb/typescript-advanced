interface MyMouseEvent {
  x: number
  y: number
}

interface MyKeyboardEvent {
  key: string
}

interface MyEventObjects {
  click: MyMouseEvent
  keypress: MyKeyboardEvent
}

function handleEvent<K extends keyof MyEventObjects>(eventName: K, callback: (e: MyEventObjects[K]) => void) {
  // An interception: e: MyEventObjects[K]
  if (eventName === 'click') {
    callback({ x: 1, y: 1 } as MyEventObjects[K])
  } else if (eventName === 'keypress') {
    callback({ key: 'Enter' } as MyEventObjects[K])
  }
}

handleEvent('click', (e) => {})
handleEvent('keypress', (e) => {})

type MyEvents = MyEventObjects[keyof MyEventObjects] // an UNION: MyMouseEvent | MyKeyboardEvent
