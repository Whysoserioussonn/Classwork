const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')


class Index extends React.Component {

    render() {

        const { fruits } = this.props

        return (
            <DefaultLayout title="All Fruit" foodGroup="fruits">
                    <h1>Fruits Index Page</h1>
                    <ul id="fruits-index">
                        {fruits.map((fruit) => {
                            return (
                                <li key={fruit._id}>
                                    The <a href={`/fruits/${fruit._id}`}>{fruit.name}</a> is {fruit.color}.
                                </li>
                            )
                        })}
                    </ul>

                    <nav>
                        <a href="/fruits/new">Create a new a fruit</a>
                    </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Index;