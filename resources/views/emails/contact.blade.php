<x-mail::message>
    # Demande pour Mon portfolio

    - Nom : {{ $data['name'] }}
    - E-mail : {{ $data['email'] }}

    **Message :**<br>
    {{ $data['message'] }}


</x-mail::message>
