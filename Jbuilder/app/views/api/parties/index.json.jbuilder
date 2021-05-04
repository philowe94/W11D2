json.array! @parties.each do |party|
    
      json.partial! 'api/parties/party', party: party

    
  json.guests do 
    json.array! party.guests.each do |guest| 
      json.partial! 'api/guests/guest', guest: guest
    end
  end
end