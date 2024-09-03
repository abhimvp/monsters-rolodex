// converting functional to class component
// import {Component} from 'react';

// We use Hooks for functional components.
import { useState , useEffect } from 'react';


// import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  console.log('App is rendering');

  const [searchString,setSearchString]=useState('');
  console.log({searchString});
  const [monsters,setMonsters]=useState([]);
  console.log({monsters});
  const [filteredMonsters,setFilteredMonsters] = useState(monsters);
  console.log({filteredMonsters});
  

  useEffect(()=>{
    console.log('fetch');
    fetch('https://jsonplaceholder.typicode.com/users') // this is going to be a PROMISE , which is asynchronous is Javascript.It's essentially a promise that eventually i'm going to have a value.
      .then((response) => response.json())
      .then((users) => setMonsters(users));

  },[]);

  useEffect(()=>{

    console.log('effect is firing')
    const newfilteredMonsters = monsters.filter(
      (monster)=>{
        return monster.name.toLowerCase().includes(searchString);
      }
    );

    setFilteredMonsters(newfilteredMonsters);
  },[monsters,searchString]);

  const onSearchChange = (event)=>{
    // console.log(event.target.value)
    const searchField = event.target.value.toLowerCase();
    setSearchString(searchField);
  }



  return(
    <div className="App">

        <h1 className='app-title'> Monster's Rolodex </h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder='Search for MonstersYo' className='search-box'/>
        {<CardList monsters={filteredMonsters}/>}
    </div>
  )
}

// class App extends Component {

//   constructor(){ // whenever you write constructor you write super.React component will run this constructor method before anything else.
//     super();
//     console.log('constructor-App');
//     // this.state = {
//     //   name:'Abhishek'
//     // }

//     // this.state={
//     //   monster1:{
//     //     name:'Arshitha'
//     //   },
//     //   monster2:{
//     //     name:'vasavi'
//     //   },
//     //   monster3:{
//     //     name:'Nikitha'
//     //   },
//     //   monster4:{
//     //     name:'Shilpi'
//     //   }
//     // };

//     // this.state={
//     //   monsters:[
//     //   {
//     //     name:'Arshitha'
//     //   },
//     //   {
//     //     name:'vasavi'
//     //   },
//     //   {
//     //     name:'Nikitha'
//     //   },
//     //   {
//     //     name:'Shilpi'
//     //   }
//     //   ]
//     // }

//     this.state={
//       monsters:[],
//       searchString:'',
//     }

//     // Initially monster list is empty.
//     // Now i need to think , when do i get the list? , how do i get the list? , where do i put the list? this is where react gives us lifecycle components.

//   }
// // Mount is when first time component gets placed on DOM.
//   componentDidMount(){
//     // console.log('componentDIdMount');
//     // Make the api request as soon as the component gets mounted.when the react renders the component.
//     // we use native fetch() to make API request.
//     fetch('https://jsonplaceholder.typicode.com/users') // this is going to be a PROMISE , which is asynchronous is Javascript.It's essentially a promise that eventually i'm going to have a value.
//       .then((response) => response.json())
//       .then((users) => this.setState(
//         () => {
//           return { monsters:users}
//         },
//         // ()=>{
//         //   // console.log(this.state)
//         // }
//       ));
//   }

//   // optimization - component initialized the function once instead of creating function for every event trigger when the function is in onchange = ...
//   onSearchChange = (event)=>{
//     // console.log(event.target.value)
//     const searchString = event.target.value.toLowerCase();
//     this.setState(()=>{
//       return {
//         searchString
//       }
//     }
//     );
//   }

//   render(){ // explicitly telling react what i want to render.


// // Optimization
//     const {monsters , searchString} =this.state;
//     const {onSearchChange} = this;
//     console.log('render-App.js');
//     const filteredMonsters = monsters.filter(
//       (monster)=>{
//         return monster.name.toLowerCase().includes(searchString);
//       }
//     );

//     return (
      
//       <div className="App">

//         <h1 className='app-title'> Monster's Rolodex </h1>

//         {/* <input className='search-box' type='search' placeholder='search for users' onChange={onSearchChange}/> */}
//         <SearchBox onChangeHandler={onSearchChange} placeholder='Search for MonstersYo' className='search-box'/>
//         <br/>
//         {/* {<CardList monsters='Me the Monster' anything={['a','z']}/>} */}
//         {<CardList monsters={filteredMonsters}/>}
//         {/* {<InputComponent/>} */}

//         {/* Not a effiecient way - what if we have 1000 monsters?  
//         <h1> {this.state.monster1.name}</h1>
//         <h1> {this.state.monster2.name}</h1>
//         <h1> {this.state.monster3.name}</h1>
//         <h1> {this.state.monster4.name}</h1> */} 
//         {/* Mapping Arrays to Elements */}

//         {/* {
//           this.state.monsters.map((monster)=>{
//             return <h1>{monster.name}</h1>
//           }) // the .map() method allows you to iterate over every single element , map doesn't modify the original array; it returns a brand new array.
//           // The provided function (callback) is executed on each element of the original array, and the return value of each execution becomes the corresponding element in the new array.
//         } */}

//         {/* {
//           filteredMonsters.map((monster) => {
//             return <h1 key={monster.id}> {monster.name} </h1>
//           })
//         } */}

        

//       </div>
//       // <div className="App">
//       //   <header className="App-header">
//       //     <img src={logo} className="App-logo" alt="logo" />
//       //     <p>
//       //       Hi {this.state.name} 
//       //     </p> {/* whenever i see curly braces inside of this HTML , i want to access a javascript variable.*/}
//       //     <button onClick={()=>{
//       //       // this.setState({name:'Hanuman'}) // updating the state to a different object - a shallow merge - re-rendering the component when the event happens(clicking the button)
//       //       // this.setState(()=>{},()=>{}) Here we are passing a function and a callback , 2 arguments we can pass to this.setState - if you pass it like this u will get a more consistent synchronus behavior.
//       //       // this.setState((state,props)=>{returns {name:'Yera Puli'}},()=>{}) // the first function here is updater function & have acces to state and props , state here is equal to current state.both are optional.
//       //       // optimal way to write setState code.
//       //       this.setState(()=>{
//       //         return{
//       //           name:'Ram'
//       //         }
//       //       },()=>{
//       //         console.log(this.state); // we use this callback function to run after all of the state changes have been applied , here we see the updated name. Ram
//       //       })
//       //       // console.log(this.state); After clicking the button we still see Abhishek itself.
//       //       console.log(this.state);
//       //     }}>CHange Name</button>
//       //   </header>
//       // </div>
//     );
//   }
  
// }

export default App;
