const { Outlet, Link, NavLink } = ReactRouterDOM
const { useState } = React

export function About() {
    const [cmpType, setCmpType] = useState('hello')

    function handleGreetClick(value) {
        console.log(`${value} \nClicked!`)
    }

    return (
        <section className="about">
            <h1>About cars and us...</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio dolore sapiente, iste animi corporis nisi atque tempora assumenda dolores. Nobis nam dolorem rerum illo facilis nemo sit voluptatibus laboriosam necessitatibus!</p>

            <hr />
            <select value={cmpType} onChange={ev => setCmpType(ev.target.value)}>
                <option>hello</option>
                <option>goodbye</option>
                <option>welcomeBack</option>
            </select>
            <section className="dynamic-cmps">
                <DynamicCmp cmpType={cmpType} name="Popo" age={20} handleClick={handleGreetClick}/>
                {/* {cmpType === 'hello' && <Hello name="Popo" age={20} handleClick={handleGreetClick} />}
                {cmpType === 'goodbye' && <GoodBye name="Popo" age={20} handleClick={handleGreetClick} />}
                {cmpType === 'welcomeBack' && <WelcomeBack name="Popo" age={20} handleClick={handleGreetClick} />} */}
            </section>
            <hr />

            <nav>
                <NavLink to="/about/team">Team</NavLink>
                <NavLink to="/about/vision">Vision</NavLink>
            </nav>
            <Outlet />
        </section>
    )
}


function DynamicCmp(props) {
    switch (props.cmpType) {
        case 'hello':
            return <Hello {...props} />
        case 'goodbye':
            return <GoodBye {...props} />
        case 'welcomeBack':
            return <WelcomeBack {...props} />
        default:
            return ''
    }
}


//* About Dynamic Cmps
function Hello({ name, handleClick, age = 0 }) {
    return (
        <h2 onClick={() => handleClick('Hello')}>
            Hello there {name},  you are {age} years old
        </h2>
    )
}

function GoodBye({ name, handleClick, age = 0 }) {
    return (
        <h2 onClick={() => handleClick('Good Bye')}>
            Bye {name},  you are {age} years old
        </h2>
    )
}

function WelcomeBack({ name, handleClick, age = 0 }) {
    return (
        <h2 onClick={() => handleClick('Welcome Back')}>
            Welcome back {name},  you are {age} years old
        </h2>
    )
}
