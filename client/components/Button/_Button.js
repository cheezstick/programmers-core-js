



class MyElement extends HTMLElement{

  count = 0;

  constructor(){
    super();

  }

  // 연결되는 순간 호출되는 함수
  connectedCallback(){
    console.log('mount');
    this.render();
  }

  disconnectedCallback(){
    console.log('unmount');
  }
  
  static get observedAttributes(){

    return ['data-value'];
  }

  attributeChangedCallback(name,oldValue,newValue) {

    if(name==='data-value'){
      this.render();
    }
    console.log(name,oldValue,newValue);

  }


  handleClick(){
    console.log('clicked');
    this.dataset.value = ++this.count;
  }


  attachEvent(){
    this.addEventListener('click',this.handleClick);
  }


  render(){
    console.log();
    this.innerHTML = ++this.count;
  }



}

// 브라우저에게 알려주는 시점
customElements.define('my-element',MyElement);






class HelloButton extends HTMLButtonElement {
  constructor(){
    super();
  }
}

customElements.define('hello-button',HelloButton,{extends:'button'})




