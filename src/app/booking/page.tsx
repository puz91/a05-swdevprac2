import DateReserve from "@/components/DateReserve";

export default function Booking() {
    return (
        <main className="w=[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">Venue Booking</div>

            <DateReserve></DateReserve>

        </main>
    );
}