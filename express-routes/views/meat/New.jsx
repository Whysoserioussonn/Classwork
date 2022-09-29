const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="create a new meat" foodGroup="meat">
                <h1>New Page</h1>
                <form action="/meat" method="POST">

                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />

                    <label htmlFor="color">Color:</label>
                    <input type="text" id="color" name="color" />

                    <label htmlFor="readyToEat">Is Ready To Eat:</label>
                    <input type="checkbox" id="readyToEat" name="readyToEat" />

                    <input type="submit" value="Create Meat"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New