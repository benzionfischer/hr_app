import { Accordion } from "../cmps/Accordion.jsx";
import { LongTxt } from "../cmps/LongTxt.jsx";

export function Home() {

    return (
        <section className="home">
            <h1 >Car's R Us!</h1>
            {/* <img src="../assets/img/react.png" alt="hero-image" /> */}
            <Accordion title="Machine Learning">
                Machine learning is a subset of artificial
                intelligence that focuses on building systems that learn from data,
                improve their performance over time without being explicitly programmed,
                and make decisions based on data patterns.
                <span>🐙</span>
            </Accordion>
            <Accordion title="Introduction to Quantum Computing">
                Quantum computing is an area of computing focused on developing computer
                technology based on the principles of quantum theory. Quantum computers use
                qubits, which can represent and store data in multiple states simultaneously.
                <p>🍎</p>
            </Accordion>

            {/* <CmpWithChildren txt="Blabla">
                <div>🍎</div>
                <button>X</button>
                <section>
                    <input type="text" />
                </section>
            </CmpWithChildren> */}
        </section>
    )
}


function CmpWithChildren({ children, txt }) {
    // console.log('children:', children)
    return (
        <section>
            <h1>{txt}</h1>
            <section>
                <div>
                    {children}
                </div>
            </section>
            <LongTxt>
                Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Ratione vero dolores
                nesciunt quod dignissimos aliquam inventore delectus quas voluptates
                distinctio repellendus ipsa, asperiores at quae hic, voluptatibus accusantium non eius, est illo iste molestiae autem? Hic quibusdam quisquam harum cupiditate aut corrupti obcaecati natus nihil! In perferendis soluta vel explicabo incidunt ea deserunt cum accusantium possimus fugit doloribus eligendi amet qui fuga officia quis earum, iste minus doloremque veniam neque nulla! Porro, dolorum nulla similique, dicta vitae laboriosam excepturi doloremque consectetur dignissimos eum at debitis ullam. Adipisci tenetur sapiente sunt repellendus officia similique assumenda reiciendis perferendis quibusdam cupiditate voluptatibus dicta numquam architecto quaerat vero dolorum enim deleniti nulla, corrupti debitis porro a et rem! Voluptatibus libero inventore laudantium tenetur totam? Inventore quos eius consequatur veritatis ullam architecto magnam? Quidem architecto perspiciatis nesciunt praesentium illo repellat modi dolore, beatae ut earum, facilis veritatis ullam tempora excepturi officia sequi repudiandae qui corporis quo quos commodi, eveniet voluptas. Ad soluta ipsa explicabo nulla, ipsam magni impedit odio sequi vel ipsum quaerat molestiae beatae dolorum asperiores reiciendis consequatur inventore cum, laborum nesciunt nisi? Aliquam quo earum eius ad pariatur mollitia quia perspiciatis! Architecto dolorum non nostrum repellendus! Consectetur rem magnam libero odit quibusdam, amet facere eos eaque pariatur, iure culpa repellat possimus iusto delectus? Ex tempore cupiditate inventore corrupti minus iusto commodi placeat voluptatem quisquam obcaecati natus ullam, vero harum perferendis maiores vel? Vitae quam nam repudiandae optio quas similique? Sapiente facilis aliquid suscipit fugit, corrupti eaque? Quo maxime quibusdam, eos voluptatibus pariatur reprehenderit eius commodi nisi enim repellendus assumenda dolores accusantium quam quod ad dolore veniam incidunt provident cupiditate iure magni? Fugit voluptas iure magnam dicta repellat ipsam, nemo tenetur nihil vitae. Veniam quisquam quasi asperiores, quod quas dolorum inventore maxime id dicta qui perferendis unde
                repellat dolores? Tempore dolorem modi magni illo.
            </LongTxt>
        </section>
    )
}