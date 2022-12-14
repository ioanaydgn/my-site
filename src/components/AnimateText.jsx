import React from 'react'
import Typical from 'react-typical';

function AnimateText() {
    /*
    var Text = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };
      
      Text.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
      
        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
      
        this.el.innerHTML = '<span className="wrap">'+this.txt+'</span>';
      
        var that = this;
        var delta = 200 - Math.random() * 100;
      
        if (this.isDeleting) { delta /= 2; }
      
        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }
      
        setTimeout(function() {
          that.tick();
        }, delta);
      };
      
      window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-words');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new Text(elements[i], JSON.parse(toRotate), period);
          }
        }
      }; 
      */
     /* 
     <span className="typewrite"
                        cursorChar="/"
                        data-period="2000" 
                        data-words=' ["Computer engineering student"] '>
                            <span className="cursor">█</span>
     </span> */
  return (
    <div>
        <span className="p-note">
                <div className="animation_text">
                    <h3>&nbsp;
                        &nbsp;
                        <Typical loop={Infinity} wrapper="b" steps={['',600,'Compuu',800,'Computer enginerin',1000,'Computer engineering',1500,'Computer engineering student',2000  ]}></Typical>
                    </h3>
                </div>
            </span>
    </div>
  )
}

export default AnimateText;