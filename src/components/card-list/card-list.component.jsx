// import { Component } from "react";

import Card from "./card.component";

const CardList = ({monsters}) => (
    <div className='card-list'> {/* Import div bigilu.. */}
        {
            monsters.map((monster) => {
                return  <Card key={monster.id} monster={monster}/>;
            })
        }
    </div>
)


// class CardList extends Component{
//     render(){
//         // console.log('render-cardList');
//         // console.log(this.props.monsters)
//         const { monsters}=this.props;
//         return (
//             <div className='card-list'> {/* Import div bigilu.. */}
//                 {
//                 monsters.map((monster) => {
//                     const { name, email ,id }=monster;
//                     return (
//                         <div className="card-container" key={id}>
//                         <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2`} />
//                         <h2> {name}</h2>
//                         <p> {email}</p>
//                     </div>
//                     )
//                 }    
//                 )
//               }         
//             </div>
//         )
//     }
// }

export default CardList;