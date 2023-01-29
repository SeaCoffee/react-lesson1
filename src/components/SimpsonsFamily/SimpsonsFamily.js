import {Simpson} from "../Simpson/Simpson";


const SimpsonsFamily = () => {


    let simpsons = [
        {
            key: 4,
            name: 'Homer',
            surname: 'Simpson',
            img: "https://static.wikia.nocookie.net/simpsons/images/8/8d/Swimsuit_Homer.png"
        },

        {
            key: 2,
            name: 'Marge',
            surname: 'Simpson',
            img: "https://upload.wikimedia.org/wikipedia/ru/thumb/0/0b/Marge_Simpson.png/217px-Marge_Simpson.png"
        },

        {
            key: 8,
            name: 'Bart',
            Surname: 'Simpson',
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Bart_Simpson_200px.png/170px-Bart_Simpson_200px.png"
        },

        {
            key: 5,
            name: 'Lisa',
            surname: 'Simpsons',
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/220px-Lisa_Simpson.png"
        }
    ]


//         <div>
//             {
//
//         simpsons.map(simpson => {simpson key={simpson.key}, simpson={simpson}})})
// }
// </div>)
    return (
        <div>
            {
                simpsons.map(simpson => <Simpson key={simpson.name} {...simpson}/>)
            }
        </div>
    )

}
export {SimpsonsFamily}