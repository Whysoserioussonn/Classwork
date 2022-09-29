const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')


class Index extends React.Component {

    render() {

        const { meat } = this.props

        return (
            <DefaultLayout title="All Meat" foodGroup="meat">
                    <h1>Meats Index Page</h1>
                    <ul id="meat-index">
                        {meat.map((meat) => {
                            return (
                                <li key={meat._id}>
                                    The <a href={`/meat/${meat._id}`}>{meat.name}</a> is {meat.color}.
                                </li>
                            )
                        })}
                    </ul>

                    <nav>
                        <a href="/meat/new">Create a new a meat</a>
                    </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Index;