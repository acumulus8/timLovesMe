const reasons = [
    'You make me feel complete!',
    'You are like a puzzle piece that fits me so perfectly',
    'You are so kind and loving',
    'Thinking of you makes me feel so warm',
    'You have so much love that you radiate to everyone!',
    'I am so lucky to be yours',
    'I want to grow old with you!',
    'Looking into your eyes makes me melt!',
    'You are such a genuine and open person',
    'You constantly inspire me to be better',
    'I imagine only the greatest futures with you',
    'I trust you so much and will always follow you',
    'You are my beacon of light in the darkness',
    'Kissing you is like returning home',
    'You are my dearest friend',
    'I am so fortunate to have you!',
    'Thinking of you fills me with warmth and joy',
    'You are my absolute favorite!',
    'I know that I am supossed to be with you!',
    "I can't imagine being with anyone else",
    'You are my number ONE!',
    'You are the 100% perfect girl for me!',
    'You are so zoolio',
    'You are the greatest and most loving cat mother - love, Hunter',
    'Did I mention how zoolio you are???',
    'You are so much fun to be around!',
    'You make me feel heard and loved!',
    'You make me feel so taken care of',
    'I know that when I am with you, things are going to be ok',
    'You are my better half',
    'You make me feel more love than I thought possible!',
    "You'll never truly understand how big of an impact you have had on my life",
    'My life is so much better for having you in it',
]

let getResponse = function () {
    $('#responseField').empty();
    let randomIndex = Math.floor(Math.random() * 32);
    let response = reasons[randomIndex];
    return response;
}

$('#button').on('click', function () {
    $('#responseField').append('<p class="animated fadeInUp">' + getResponse() + '</p>');
});

