import { supabase } from './supabase';

const supabaseNotConfiguredError = {
    success: false,
    error: 'Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.'
};

export type FormType = 'waitlist' | 'partnership' | 'contact';

interface WaitlistData {
    email: string;
}

interface PartnershipData {
    organizationName: string;
    contactPerson: string;
    email: string;
    interestArea: string;
    message: string;
}

interface ContactData {
    name: string;
    email: string;
    message: string;
}

/**
 * Submit a waitlist signup to Supabase
 */
export async function submitWaitlist(data: WaitlistData): Promise<{ success: boolean; error?: string }> {
    if (!supabase) {
        return supabaseNotConfiguredError;
    }
    const { error } = await supabase
        .from('form_submissions')
        .insert({
            form_type: 'waitlist',
            email: data.email,
        });

    if (error) {
        console.error('Waitlist submission error:', error);
        return { success: false, error: error.message };
    }

    return { success: true };
}

/**
 * Submit a partnership inquiry to Supabase
 */
export async function submitPartnershipInquiry(data: PartnershipData): Promise<{ success: boolean; error?: string }> {
    if (!supabase) {
        return supabaseNotConfiguredError;
    }
    const { error } = await supabase
        .from('form_submissions')
        .insert({
            form_type: 'partnership',
            email: data.email,
            organization_name: data.organizationName,
            contact_person: data.contactPerson,
            interest_area: data.interestArea,
            message: data.message,
        });

    if (error) {
        console.error('Partnership submission error:', error);
        return { success: false, error: error.message };
    }

    return { success: true };
}

/**
 * Submit a contact form message to Supabase
 */
export async function submitContactMessage(data: ContactData): Promise<{ success: boolean; error?: string }> {
    if (!supabase) {
        return supabaseNotConfiguredError;
    }
    const { error } = await supabase
        .from('form_submissions')
        .insert({
            form_type: 'contact',
            email: data.email,
            name: data.name,
            message: data.message,
        });

    if (error) {
        console.error('Contact submission error:', error);
        return { success: false, error: error.message };
    }

    return { success: true };
}

interface KitRequestData {
    name: string;
    email: string;
    organization: string;
    message: string;
    kits: Array<{ name: string; quantity: number }>;
}

/**
 * Submit a STEM kit request to Supabase
 */
export async function submitKitRequest(data: KitRequestData): Promise<{ success: boolean; error?: string }> {
    if (!supabase) {
        return supabaseNotConfiguredError;
    }
    const kitsDescription = data.kits.map(k => `${k.name} x${k.quantity}`).join(', ');

    const { error } = await supabase
        .from('form_submissions')
        .insert({
            form_type: 'kit_request',
            email: data.email,
            name: data.name,
            organization_name: data.organization,
            message: `KITS REQUESTED: ${kitsDescription}\n\nMESSAGE: ${data.message}`,
        });

    if (error) {
        console.error('Kit request submission error:', error);
        return { success: false, error: error.message };
    }

    return { success: true };
}
