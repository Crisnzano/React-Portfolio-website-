import React from "react";

export default function Form() {
    const [name, email, number, message] = useState("");
    return (
        <form>
        <input type="text" value="name" placeholder="name" class="box"/>
        <input type="email" value="email" placeholder="email" class="box"/>
        <input type="number" value = "number" placeholder="number" class="box"/>
        <textarea value="message" placeholder="message" id="" cols="30" rows="10"></textarea>
        <input type="submit" class="btn" value="send message"/>

    </form>


    );
}