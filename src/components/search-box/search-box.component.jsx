// import { Component } from "react";


const SearchBox = ({ className, placeholder, onChangeHandler }) => (
    <input
      className={`search-box ${className}`}
      type='search'
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );

// class SearchBox extends Component {

    

//     render(){

        

//         return(
//             <div>
//                 <input className={this.props.className} type='search' placeholder={this.props.placeholder} onChange={this.props.onChangeHandler}/>
//             </div>
//         )
//     }

// }

export default SearchBox;