const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')


class Index extends React.Component {

    render() {

        const { vegetables } = this.props

        return (
            <DefaultLayout title="All Vegetable" foodGroup="vegetables">
                    <h1>Vegetables Index Page</h1>
                    <ul id="vegetables-index">
                        {vegetables.map((vegetable) => {
                            return (
                                <li key={vegetable._id}>
                                    The <a href={`/vegetables/${vegetable._id}`}>{vegetable.name}</a> is {vegetable.color}.
                                </li>
                            )
                        })}
                    </ul>

                    <nav>
                        <a href="/vegetables/new">Create a new a vegetable</a>
                    </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Index;