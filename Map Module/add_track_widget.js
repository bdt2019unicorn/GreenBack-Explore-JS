export function AddTrackWidget(Track, view)
{
    var track = new Track 
    (
        {
            view: view,
            goToLocationEnabled: false
        }
    ); 
    return track; 
}