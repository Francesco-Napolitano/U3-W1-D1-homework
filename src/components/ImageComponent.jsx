import { Component } from "react";

class ImageComponent extends Component{
   render (){
      return (
         <section>
            <img src={this.props.src} alt={this.props.alt} />
         </section>
      )
   }
}
export default ImageComponent