import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import io from 'socket.io-client';
import anime from 'animejs';

const socket = io(process.env.NODE_ENV === 'production' ? 'https://speech.lalilo.com/shhht' : 'http://localhost:5000')

export const record = () => {
  return navigator.mediaDevices.getUserMedia({
    audio: {
      sampleSize: 16,
      channelCount: 1,
      sampleRate: 16000
    }
  })
  .then(stream => {
    const mediaRecorder = new MediaRecorder(stream)
    mediaRecorder.start(250)
    mediaRecorder.ondataavailable = (event) => {
      socket.emit('message', new Blob([event.data], { 'type' : 'audio/ogg; codecs=opus' }))
    }
  })
}

record()




ReactDOM.render(<App />, document.getElementById('root'));

const animation = anime({
  targets: '#lineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 500 },
});

socket.on('level', (level) => {
  if (level > 1.5) {
    return animation.pause()
  }
  animation.play()
})
