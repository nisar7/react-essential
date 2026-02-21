export default function Coreconcept({concept}) {

    return (
        <div >

            <li>
                <img src={concept?.image} alt="core-concept" />
                <h2>{concept?.title}</h2>
                <p>{concept?.description}</p>
            </li>



        </div>
    )
}