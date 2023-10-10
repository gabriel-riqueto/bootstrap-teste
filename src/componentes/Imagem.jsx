export default function Imagem(){
    return (
        <>
           <img 
                src="http://lorempixel.com.br/500/400/?1"
                className="img-fluid"
                alt="pumba" />
            <hr />
            <img 
                src="http://lorempixel.com.br/300/200/?1"
                className="img-thumbnail"
                alt="pumba" />
            <hr />
            <figure>
                <img
                    src="http://lorempixel.com.br/300/200/?2"
                    className="rounded float-start img-fluid"
                    alt="pumba" />
                 <img
                    src="http://lorempixel.com.br/300/200/?3"
                    className="rounded float-end img-fluid"
                    alt="pumba" />
            </figure>
        </>
    )
}