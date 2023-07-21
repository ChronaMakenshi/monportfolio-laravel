<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use Inertia\Inertia;
use Illuminate\Http\Request;;
use App\Mail\ContactMail;
use App\Models\Contact;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function __construct()
    {
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('contact', [
            $contact = new Contact,
        ]);
    }

    public function contact(ContactRequest $request )
    {
        $contact = Contact::create($request->validated());
        Mail::send(new ContactMail($request->validated()));
        return back()->with('success', 'Merci de m\'avoir contacté');
    }
}
