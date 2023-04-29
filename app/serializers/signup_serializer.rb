class SignupSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :workshop_id, :referral_type, :additional_notes
end
