const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

// class component
class Show extends React.Component {

    render() {
        
        const { fruit } = this.props

        return (
            <DefaultLayout title={`${fruit.name} details`} foodGroup="fruits">
                <h1>Show Page</h1>
                <p>
                    The {fruit.name} is {fruit.color}.
                </p>
                <p>
                    {fruit.readyToEat ? "It is ready to eat!" : "It is NOT ready to eat... :("}
                </p>

                <button>
                    <a href={`/fruits/${fruit._id}/edit`}>Edit</a>
                </button>

                <form action={`/fruits/${fruit._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete" />
                </form>

                <nav>
                    <a href="/fruits">Back</a>
                </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Show;