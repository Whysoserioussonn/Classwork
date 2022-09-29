const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

class Edit extends React.Component {
    render() {

        let { vegetable } = this.props

        return (
            <DefaultLayout title="edit a vegetable" foodGroup="vegetables">
                <h1>Edit Page</h1>
                <form action={`/vegetables/${vegetable._id}?_method=PUT`} method="POST">

                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" defaultValue={vegetable.name} />

                    <label htmlFor="color">Color:</label>
                    <input type="text" id="color" name="color" defaultValue={vegetable.color} />

                    <label htmlFor="readyToEat">Is Ready To Eat:</label>
                    <input type="checkbox" id="readyToEat" name="readyToEat" defaultChecked={vegetable.readyToEat} />

                    <input type="submit" value="Edit Vegetable"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = Edit