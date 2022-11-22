/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react"
import { TicketReponse } from "./types"
import { useInterval } from "./utils"


export interface SoporteProps {
    tickets: TicketReponse
    setTickets: (tickets: TicketReponse) => void
}

export default function Soporte(props: SoporteProps) {

    const { tickets, setTickets } = props

    useEffect(() => {
        fetch("http://localhost:5001/crearTickets")
            .then((res) => res.json())
            .then((data) => {
                setTickets(data)
                // setLoading(false)
            })
    }, [])

    useInterval(() => {
        fetch("http://localhost:5001/crearTickets")
            .then((res) => res.json())
            .then((data) => {
                setTickets(data)
            })
    }, 2000)

    return (
        <div>
            {props.tickets.map((ticket) => (
                <div>
                    <div>titulo: {ticket.titulo}</div>
                </div>
            ))}
        </div>
    )
}