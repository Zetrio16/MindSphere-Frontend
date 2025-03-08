import React from 'react'
import './team.css'

function TeamSection() {
  const founder = {
    id: 1,
    name: "Saima Kareem",
    role: "Founder MindSphere",
    image: "https://www.motherhoodindia.com/wp-content/uploads/2022/10/Dr-Sri-Tirumala-Devi-Physiothery-1024x683.jpg",
    qualifications: [
      "MS. Psychology",
      "MSc. Behavioral Sciences",
      "Advanced Diploma in Clinical Psychology (ADCP)",
      "Diploma in Psychotherapy (CTAA, USA)"
    ]
  }

  const teamMembers = [
    {
      id: 2,
      name: "Sofia Ghafoor",
      role: "Clinical Psychologist",
      image: "https://content.jdmagicbox.com/comp/mehsana/n3/9999p2762.2762.210814122857.z8n3/catalogue/vinayak-physiotherapists-center-thol-mahesana-mehsana-kvptsn46ci.jpg?clr=",
      qualifications: [
        "MS. Clinical Psychology (FUI Islamabad)",
        "MSc. Applied Psychology"
      ]
    },
    {
      id: 3,
      name: "Mariya Ubaid Khan",
      role: "Clinical Psychologist",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Y13koYIC77aeaQGNktYAZV2KSEsRdwc2X0vCpxydV2DOwTrfjvhHSzZgtZv-QA-5mnI&usqp=CAU",
      qualifications: [
        "MS. Clinical Psychology",
        "BS Psychology"
      ]
    },
    {
      id: 4,
      name: "Sadaf Rizwan",
      role: "Speech and Language Pathologist",
      image: "https://www.umhs-sk.org/hs-fs/hubfs/how-to-become-a-family-medicine-doctor.jpeg?width=255&name=how-to-become-a-family-medicine-doctor.jpeg",
      qualifications: [
        "MS. Speech and Language Pathology",
        "Master's in Special Education"
      ]
    }
  ]

  return (
    <section className="team-section">
      <h2 className="team-title">Our <span>Team</span></h2>
      
      {/* Founder Card */}
      <div className="founder-card-wrapper">
        <div className="founder-card">
          <div className="founder-card-content">
            <div className="founder-image-wrapper">
              <img
                src={founder.image || "/placeholder.svg"}
                alt={founder.name}
                className="founder-image"
              />
            </div>
            <div className="founder-info">
              <h3 className="founder-name">{founder.name}</h3>
              <p className="founder-role">{founder.role}</p>
              <div className="founder-qualifications">
                {founder.qualifications.map((qualification, index) => (
                  <p key={index} className="qualification">{qualification}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card">
            <div className="team-card-content">
              <div className="team-image-wrapper">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="team-image"
                />
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <div className="team-qualifications">
                  {member.qualifications.map((qualification, index) => (
                    <p key={index} className="qualification">{qualification}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TeamSection
