const SimpsonsFamily = (props) => {
    const {name, info, img} = props
    return (
        <div>
            <div>
                <div>name Homer</div>
                <div>info HS: Homer Jay Simpson is a fictional character
                and the main protagonist of the American
                animated sitcom The Simpsons.</div>
                <img src={"https://static.wikia.nocookie.net/simpsons/images/8/8d/Swimsuit_Homer.png"} alt='Homer Simpson'/>
            </div>
            <div>
                <div>name Marge</div>
                <div>info MS: Marjorie Jacqueline "Marge" Simpson (née Bouvier)
                    is the homemaker and matriarch of the Simpson family.</div>
                <img src={"https://upload.wikimedia.org/wikipedia/ru/thumb/0/0b/Marge_Simpson.png/217px-Marge_Simpson.png"} alt='Marge Simpson'/>
            </div>
            <div>
                <div>name Bart</div>
                <div>info BS: Bartholomew JoJo "Bart" Simpson is a fictional character
                    in the American animated television series The Simpsons and part
                    of the Simpson family.</div>
                <img src={"https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Bart_Simpson_200px.png/170px-Bart_Simpson_200px.png"} alt='Bart Simpson'/>
            </div>
            <div>
                <div>name Lisa</div>
                <div>info LS: Lisa Marie Simpson is a fictional character
                    in the animated television series The Simpsons.
                    She is the middle child and most accomplished of the Simpson family.</div>
                <img src={"https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/220px-Lisa_Simpson.png"} alt='Lisa Simpson'/>
            </div>

        </div>
    )

}

export {SimpsonsFamily}