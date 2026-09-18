const schedule = [
  { time: '07:30', activity: 'Accueil' },
  { time: '08:00', activity: 'Cours matin' },
  { time: '10:30', activity: 'Récréation' },
  { time: '11:00', activity: 'Cours' },
  { time: '12:00', activity: 'Cantine' },
  { time: '13:30', activity: 'Cours après-midi' },
  { time: '15:45', activity: 'Activités / devoirs' },
  { time: '16:30', activity: 'Sortie' },
];

export function DailySchedule() {
  return (
    <section className="section schedule-section">
      <div className="shell">
        <div className="section-heading">
          <p className="k">
            <i />
            Vie quotidienne
          </p>
          <h2>Horaires types</h2>
        </div>

        <table className="schedule-table" aria-label="Horaires types">
          <tbody>
            {schedule.map((row) => (
              <tr key={row.time}>
                <td className="time">{row.time}</td>
                <td>{row.activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default DailySchedule;
