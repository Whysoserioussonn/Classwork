const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

// class component
class Show extends React.Component {

    render() {
        
        const { meat } = this.props

        return (
            <DefaultLayout title={`${meat.name} details`} foodGroup="meat">
                <h1>Show Page</h1>
                <p>
                    The {meat.name} is {meat.color}.
                </p>
                <p>
                    {meat.readyToEat ? "It is ready to eat!" : "It is NOT ready to eat... :("}
                </p>

                <button>
                    <a href={`/meat/${meat._id}/edit`}>Edit</a>
                </button>

                <form action={`/meat/${meat._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete" />
                </form>

                <nav>
                    <a href="/meat">Back</a>
                </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Show;